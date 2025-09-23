export const fetchRolesAndPermissions = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
};