export const loadHero = () => {
  const data = localStorage.getItem("heroes");
  return data ? JSON.parse(data) : [];
};

export const saveHero = (heroes) => {
  localStorage.setItem("heroes", JSON.stringify(heroes));
};
