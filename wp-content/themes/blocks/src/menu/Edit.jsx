import { useBlockProps } from "@wordpress/block-editor";

const Edit = () => {
  const blockProps = useBlockProps();

  return <div {...blockProps}>Menu Placeholder</div>;
};

export default Edit;
