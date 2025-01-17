import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation}=useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div className="group">
      <div className={`flex gap-2 items-center p-2 hover:bg-black/40 rounded-lg transition-all duration-300 cursor-pointer
       ${isSelected ? "bg-black/40" : ""}`}
       onClick={()=>setSelectedConversation(conversation)}
       >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 group-hover:text-purple-400">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </div>
  );
};

export default Conversation;