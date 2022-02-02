import React, { useState, useEffect } from 'react';
import * as S from 'styles/SlideStyle';

const SlideItem = ({ id, imageUrl, discountRate, handleSelect, selectProduct, outside }) => {
  const [selectedItem, setSelectedItem] = useState(false);
  useEffect(() => {
    setSelectedItem(selectProduct === id ? true : false);
  }, [selectProduct]);
  return (
    <S.SlideItemWrapper selectedItem={selectedItem}>
      <S.SlideItemImage
        id={id}
        imageUrl={imageUrl}
        selectedItem={selectedItem}
        onClick={() => {
          handleSelect(id);
        }}
      />
      {!outside && <S.DisCountBadge>{discountRate}%</S.DisCountBadge>}
    </S.SlideItemWrapper>
  );
};

export default SlideItem;
