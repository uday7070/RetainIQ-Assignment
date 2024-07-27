import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ImageUploader from "./ImageUploader";
import useDraggable from "./useDraggable";
import useDroppable from "./useDroppable";

const Variant = ({
  state,
  index,
  moveRow,
  variantCount,
  handleAddVariant,
  handleRemoveState,

  handleRemoveVariant,
}) => {
  const [isDragging, drag] = useDraggable({ index });
  const drop = useDroppable(index, moveRow);

  return (
    <tr
      className="rows_tr"
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <td className="numbering fixed-column">
        <div>
          <button
            className="deleteState_btn"
            onClick={() => handleRemoveState(state.id)}
          >
            <DeleteIcon className="deleteIcon" />
          </button>
        </div>
        <div>
          <span className="rows_numbering">{state.name}</span>

          <ViewCompactIcon />
        </div>
      </td>

      <td className="product_detail fixed-column2">
        <div className="image_main_container">
          <div className="image_container">
            <button className="image_btn">
              <AddIcon />
            </button>
            <div>Add Product Filters</div>
          </div>
        </div>
      </td>

      {[...Array(variantCount)].map((_, index) => (
        <td className="image_td " key={index}>
          <div className="image_td_container ">
            <ImageUploader stateId={state.id} variantId={index + 1} />
          </div>
        </td>
      ))}
      <td>
        <div className="variantBtn">
          <button style={{ border: "none" }} onClick={handleAddVariant}>
            <AddIcon
              style={{
                background: "white",
                padding: "4px",

                cursor: "pointer",
              }}
            />
          </button>
          <button
            onClick={() => handleRemoveVariant(index + 1)}
            className="deleteVariantIcon"
          >
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default Variant;
