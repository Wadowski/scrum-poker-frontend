export const isUserAdmin = (userDetails) =>
    userDetails &&
    userDetails.roles &&
    userDetails.roles.includes('admin');
