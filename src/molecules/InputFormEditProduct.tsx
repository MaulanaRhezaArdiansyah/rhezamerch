import React from "react";

export const InputFormEditProduct = ({ datas, setDatas }: any) => {
  return (
    <>
      <input
        type="text"
        placeholder={datas.title}
        className="form-input-add-edit-product"
        onChange={(event) =>
          setDatas({
            ...datas,
            title: event.target.value,
          })
        }
      />
      <input
        type="text"
        className="form-input-add-edit-product"
        placeholder={datas.price}
        onChange={(event) =>
          setDatas({
            ...datas,
            price: event.target.value,
          })
        }
      />
      <input
        type="text"
        className="form-input-add-edit-product"
        placeholder={datas.size}
        onChange={(event) =>
          setDatas({
            ...datas,
            size: event.target.value,
          })
        }
      />
      <input
        type="text"
        className="form-input-add-edit-product"
        placeholder={datas.stock}
        onChange={(event) =>
          setDatas({
            ...datas,
            stock: event.target.value,
          })
        }
      />
      <input
        type="text"
        className="form-input-add-edit-product"
        placeholder={datas.category}
        onChange={(event) =>
          setDatas({
            ...datas,
            category: event.target.value,
          })
        }
      />
    </>
  );
};
