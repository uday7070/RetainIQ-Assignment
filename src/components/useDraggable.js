import { useDrag } from "react-dnd";

const useDraggable = (item) => {
  const [{ isDragging }, drag] = useDrag({
    type: "row",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return [isDragging, drag];
};

export default useDraggable;
