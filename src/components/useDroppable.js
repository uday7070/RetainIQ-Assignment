import { useDrop } from "react-dnd";

const useDroppable = (index, moveRow) => {
  const [, drop] = useDrop({
    accept: "row",
    hover(item, monitor) {
      if (!monitor.isOver({ shallow: true })) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  return drop;
};

export default useDroppable;
