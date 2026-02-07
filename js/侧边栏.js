document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar2 = document.getElementById('sidebar2');
    const mainContent = document.getElementById('main-content');
    sidebar2.classList.toggle('expanded');
    mainContent.classList.toggle('expanded');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    const sidebar2 = document.getElementById('sidebar2');
    const mainContent = document.getElementById('main-content');
    sidebar2.classList.remove('expanded');
    mainContent.classList.remove('expanded');
});

// document.getElementById('new-chat-btn').addEventListener('click', function() {
//     const todayList = document.getElementById('today-list');
//     const newChatItem = document.createElement('li');
//     const chatId = 'chat-' + (todayList.children.length + 1);
//     newChatItem.textContent = '新对话 ' + (todayList.children.length + 1);
//     newChatItem.id = chatId;
//     newChatItem.classList.add('bubble'); // 添加 bubble 类
//     newChatItem.setAttribute('data-tooltip',"点击查看对话"); // 设置 Tooltip 内容
//     todayList.appendChild(newChatItem);

//     // You can add more functionality here, like opening the new chat in the main content area
// });

// document.getElementById('new-chat-btn-expanded').addEventListener('click', function() {
//     const todayList = document.getElementById('today-list');
//     const newChatItem = document.createElement('li');
//     const chatId = 'chat-' + (todayList.children.length + 1);
//     // newChatItem.textContent = '新对话 ' + (todayList.children.length + 1);
//     newChatItem.id = chatId;
//     todayList.appendChild(newChatItem);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // 获取按钮元素
//     const newChatBtn = document.getElementById("new-chat-btn");
//     const newChatBtnExpanded = document.getElementById("new-chat-btn-expanded");

//     // 保存当前对话并开始新对话的函数
//     function saveAndStartNewChat() {
//         // 获取当前对话内容
//         const chatContainer = document.getElementById("chat-box");
//         const chatEntries = chatContainer.querySelectorAll(".chat-entry");

//         // 如果没有对话内容，直接清空页面
//         if (chatEntries.length === 0) {
//             chatContainer.innerHTML = ""; // 清空聊天记录
//             return;
//         }

//         // 获取最后一条对话内容
//         const lastEntry = chatEntries[chatEntries.length - 1];
//         const question = lastEntry.querySelector(".user-message .message-text").textContent;
//         const response = lastEntry.querySelector(".bot-response .message-text").textContent;

//         // 发送保存请求到后端
//         fetch("/save_chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 question: question,
//                 response: response,
//             }),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message) {
//                     console.log("对话保存成功");
//                     chatContainer.innerHTML = ""; // 清空聊天记录
//                     startNewChat(); // 开始新的对话
//                 } else {
//                     console.error("保存对话失败:", data.error);
//                 }
//             })
//             .catch(error => console.error("请求失败:", error));
//     }

//     // 开始新对话的函数
//     document.addEventListener("DOMContentLoaded", function () {
//         // 获取按钮元素
//         const newChatBtn = document.getElementById("new-chat-btn");
//         const newChatBtnExpanded = document.getElementById("new-chat-btn-expanded");
    
//         // 保存当前对话并开始新对话的函数
//         function saveAndStartNewChat() {
//             // 获取当前对话内容
//             const chatContainer = document.getElementById("chat-box");
//             const chatEntries = chatContainer.querySelectorAll(".chat-entry");
    
//             // 如果没有对话内容，直接清空页面
//             if (chatEntries.length === 0) {
//                 chatContainer.innerHTML = ""; // 清空聊天记录
//                 return;
//             }
    
//             // 获取最后一条对话内容
//             const lastEntry = chatEntries[chatEntries.length - 1];
//             const question = lastEntry.querySelector(".user-message .message-text").textContent;
//             const response = lastEntry.querySelector(".bot-response .message-text").textContent;
    
//             // 发送保存请求到后端
//             fetch("/save_chat", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     question: question,
//                     response: response,
//                 }),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.message) {
//                         console.log("对话保存成功");
//                         chatContainer.innerHTML = ""; // 清空聊天记录
//                         startNewChat(); // 开始新的对话
//                     } else {
//                         console.error("保存对话失败:", data.error);
//                     }
//                 })
//                 .catch(error => console.error("请求失败:", error));
//         }
    
       
//     });
   
// });

// Similar event listeners can be added for yesterday-list, last-week-list, and last-month-list

