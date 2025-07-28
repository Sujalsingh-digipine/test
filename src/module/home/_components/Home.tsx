import { useState } from "react";
import { Card, Button, Space, Typography } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Navbar from "../../../components/Navbar";
import { mockData } from "../@mock/mock.data";

const { Title, Text } = Typography;

const AddResource = () => {
  const [resources, setResources] = useState(mockData);
  const [addLike, setAddLike] = useState(0);
  const [addDislike, setAddDislike] = useState(0);

  const addUpvotes = (_id: string) => {
    setAddLike(addLike + 1);
    setResources(
      resources.map((resource) => {
        if (resource._id === _id) {
          return { ...resource, upVotes: resource.upVotes + 1 };
        }
        return resource;
      })
    );
  };

  const addDownvotes = (_id: string) => {
    setAddDislike(addDislike + 1);
    setResources(
      resources.map((resource) => {
        if (resource._id === _id) {
          return { ...resource, downVotes: resource.downVotes + 1 };
        }
        return resource;
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full h-full flex flex-col justify-between ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource._id}>
                <div className="flex justify-between items-start mb-2">
                  <Title
                    level={4}
                    className="text-gray-800 mb-2 truncate"
                    title={resource.title}
                  >
                    {resource.title}
                  </Title>

                  <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                </div>

                <Text className="block text-blue-600 hover:underline mb-3 truncate">
                  <a href={resource.url}>{resource.url}</a>
                </Text>
                <Text className="block text-gray-600 text-sm mb-4">
                  Category:{" "}
                  <span className="font-semibold">{resource.category}</span>
                </Text>

                <Space size="middle" className="w-full justify-between">
                  <Button
                    type="default"
                    icon={<LikeOutlined />}
                    onClick={() => addUpvotes(resource._id)}
                    className="flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-700 border-green-300 rounded-full px-4 py-2"
                  >
                    <span className="ml-1 font-medium">{resource.upVotes}</span>
                  </Button>
                  <Button
                    type="default"
                    icon={<DislikeOutlined />}
                    onClick={() => addDownvotes(resource._id)}
                    className="flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-700 border-red-300 rounded-full px-4 py-2"
                  >
                    <span className="ml-1 font-medium">
                      {resource.downVotes}
                    </span>
                  </Button>
                </Space>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddResource;
