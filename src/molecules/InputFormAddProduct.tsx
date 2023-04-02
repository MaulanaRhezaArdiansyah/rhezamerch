import React from "react";

export const InputFormAddProduct = ({ datas, setDatas }: any) => {
  return (
    <>
      <input
        type="text"
        placeholder="Add product title . . ."
        className="form-input-add-edit-product"
        value={datas.title || ""}
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
        value={datas.price || ""}
        placeholder="Add product price . . ."
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
        value={datas.size || ""}
        placeholder="Add product size . . ."
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
        value={datas.stock || ""}
        placeholder="Add product stock . . ."
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
        value={datas.category || ""}
        placeholder="Add product category . . ."
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
