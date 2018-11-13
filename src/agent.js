const agent = {
  fetchData: () => fetch(`${process.env.PUBLIC_URL}/api/tukios/`)
};
export default agent;
