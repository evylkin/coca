export const usePlans = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const pricesList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1680,
      withSale: 1400,
    },
    enterprise: {
      default: 2520,
      withSale: 2100,
    },
  };
  const setPracesWithSale = () => {
    starterPrice.textContent = pricesList.starter.withSale;
    popularPrice.textContent = pricesList.popular.withSale;
    enterprisePrice.textContent = pricesList.enterprise.withSale;
  };
  const setPracesDefault = () => {
    starterPrice.textContent = pricesList.starter.default;
    popularPrice.textContent = pricesList.popular.default;
    enterprisePrice.textContent = pricesList.enterprise.default;
  };

  switcher.checked = true;
  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPracesWithSale();
    } else {
      setPracesDefault();
    }
  });
};
