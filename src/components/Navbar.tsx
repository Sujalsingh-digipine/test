import { Avatar, Dropdown, Space, Button, Tooltip, Select } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from "antd/es/modal/Modal";
const Navbar = () => {
  const navigation = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "logout":
        localStorage.clear();
        navigation("/auth/login");
        break;
    }
  };

  const items: MenuProps["items"] = [
    { label: "Logout", key: "logout", icon: <LogoutOutlined />, danger: true },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold text-black cursor-pointer">
        Dev Resource
      </div>

      <div className="flex gap-6 text-gray-700 items-center">
        <Button type="text" onClick={() => navigation("/home")}>
          <Tooltip
            title="Home"
            placement="bottom"
            arrow={false}
            getPopupContainer={(trigger) => trigger.parentElement!}
          >
            <AiOutlineHome className="text-xl mt-[2px]" />
          </Tooltip>
        </Button>
        <Modal
          title="Create Resource"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="flex flex-col justify-between gap-2">
            <label>Title:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Eg: Node.js"
            />
            <label>URL:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Eg: https://nodejs.org/en/"
            />
            <label>Category:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Eg: Backend"
            />
          </div>
        </Modal>

        <Button type="text" onClick={showModal}>
          <Tooltip
            title="Create Resource"
            placement="bottom"
            arrow={false}
            getPopupContainer={(trigger) => trigger.parentElement!}
          >
            <IoAddCircleOutline className="text-xl mt-[2px] " />
          </Tooltip>
        </Button>
      </div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Sorted By Upvotes",
          },
          {
            value: "2",
            label: "Sorted By Downvotes",
          },
        ]}
      />
      <div className="flex items-center gap-4">
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          placement="bottomRight"
          arrow
          getPopupContainer={(trigger) => trigger.parentElement!}
        >
          <Space className="cursor-pointer">
            <Avatar src="https://i.pravatar.cc/150?img=18" />
          </Space>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
