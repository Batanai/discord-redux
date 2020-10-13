import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "../../features/appSlice";

const SidebarChannel = ({ id, name }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            name: name,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {name}
      </h4>
    </div>
  );
};

export default SidebarChannel;
