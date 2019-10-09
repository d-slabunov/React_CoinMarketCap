import React from "react";

export const editDataForTable = (data) => {
  return data.map((item, i) => {
    if (item.quote && item.quote.USD) {
      const {price, percent_change_1h, percent_change_7d, percent_change_24h} = item.quote.USD;
      return {
        key: i,
        name: item.name,
        price: price,
        percent_change_1h: <div className={percent_change_1h > 0 ? 'price-risen' : 'price-fallen'}>{percent_change_1h}</div>,
        percent_change_7d: <div className={percent_change_7d > 0 ? 'price-risen' : 'price-fallen'}>{percent_change_7d}</div>,
        percent_change_24h: <div className={percent_change_24h > 0 ? 'price-risen' : 'price-fallen'}>{percent_change_24h}</div>
      }
    }
    return item
  })
};
