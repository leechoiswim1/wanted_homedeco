import React, { useEffect, useState, useRef, useCallback, ReactElement } from 'react';
import { SlideMenu, ToolTip } from 'Components';
import * as S from './ProductMain.style';
import { ProductMainProps } from './ProductMain.type';

const ProductMain = ({ imageUrl, productLists }: ProductMainProps) => {
  const [selectProduct, setSelectProduct] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number>();
  const [imageWidth, setImageWidth] = useState<number>();
  const imageRef = useRef<HTMLImageElement>(null);
  const handleSelect = useCallback(
    (productId: number | null) => {
      productId === selectProduct ? setSelectProduct(0) : setSelectProduct(productId);
    },
    [setSelectProduct, selectProduct]
  );
  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.height);
      setImageWidth(imageRef.current.width);
    } else {
      return;
    }
  }, [selectProduct]);

  const Products = React.memo(
    (): ReactElement => (
      <S.ProductWrapper>
        <S.ProductImage
          ref={imageRef}
          src={imageUrl}
          alt="productImage"
          onClick={() => handleSelect(null)}
        />
        {productLists &&
          productLists.map(product => {
            const newPointX = product.pointX * 1.67;
            const newPointY = product.pointY * 1.67;
            const BottomBox = imageHeight && imageHeight / 2 - newPointX < 0 ? true : false;
            const leftBox = imageWidth && imageWidth - newPointY < imageWidth / 2 ? true : false;
            return (
              <div key={product.productId}>
                <S.Magnify
                  newPointX={newPointX}
                  newPointY={newPointY}
                  onClick={() => handleSelect(product.productId)}
                >
                  <S.MagIcon
                    src={
                      selectProduct === product.productId
                        ? 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
                        : '//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
                    }
                  />
                  <ToolTip
                    BottomBox={BottomBox}
                    leftBox={leftBox}
                    boxDisplay={selectProduct === product.productId}
                    product={product}
                  />
                </S.Magnify>
              </div>
            );
          })}
        <SlideMenu
          productLists={productLists}
          handleSelect={handleSelect}
          selectProduct={selectProduct}
        />
      </S.ProductWrapper>
    )
  );

  return <Products />;
};

export default ProductMain;
