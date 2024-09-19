const button = document.getElementById("button");

button.addEventListener("click", () => {
  const newPost = {
    title: "A new post",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error aut! Voluptas ipsum vitae quae velit consequuntur repellat veniam optio deleniti doloribus animi doloremque, dolorem asperiores suscipit eius consequatur aut?",
    UserId: 1,
  };

  fetch("https://jsonplaceholdertypicode.com");
});
