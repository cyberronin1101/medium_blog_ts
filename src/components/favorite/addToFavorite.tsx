type propsType = {
  isFavorite: boolean;
  favoriteCount: number;
  favoriteToggler: () => void;
  isLoading: boolean;
};

const AddToFavorite = ({
  isFavorite = false,
  favoriteCount = 0,
  favoriteToggler = () => {},
  isLoading = false,
}: propsType) => {
  const onToggle = () => favoriteToggler();

  return (
    <button
      className={
        "btn btn-sm " + (isFavorite ? "btn-primary" : "btn-outline-primary")
      }
      onClick={onToggle}
      disabled={isLoading}
    >
      <i className={"ion-heart"}></i>&nbsp;{favoriteCount}
    </button>
  );
};

export default AddToFavorite;
