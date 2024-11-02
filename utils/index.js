export const getImageUrl = (imageSrc) => {
  return imageSrc
    ? process.env.NEXT_PUBLIC_ADMIN_URL + imageSrc
    : "/images/placeholder.png";
};

export const getTextFromDescription = (description) => {
  if (!description) return "";
  const text = description
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("\n");
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};
