// 封装一个函数来获取一个结果：当前是早上|下午|晚上
export const getTime = () => {
  let message = '';
  // 通过当前的内置函数ate
  let hours = new Date().getHours();
  if (hours <= 9) {
    message = "早上好";
  } else if (hours <= 12) {
    message = "上午好";
  } else if (hours <= 18) {
    message = "下午好";
  } else {
    message = "晚上好";
  }
  return message;
};
