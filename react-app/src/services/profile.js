export const getAllSongs = async () => {
  const response = await fetch("/api/songs/");
  return await response.json();
};

export const getUserLikedSongs = async (id) => {
  // const response = await fetch(`/api/users/${id}`);
  // return await response.json();
};

// export const getUsersSongs = async (user_id) => {
//   const response = await fetch(`/api/songs/users/${user_id}`);
//   return await response.json();
// };
