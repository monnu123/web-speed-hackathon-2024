import {
  ArrowBack,
  NavigateNext,
  Close,
  Favorite,
  FavoriteBorder,
  Search,
} from '@mui/icons-material';

type Props = {
  color: string;
  height: number;
  type: string;
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line
  const Icon = type === "ArrowBack" ? ArrowBack
    : type === "NavigateNext" ? NavigateNext
      : type === "Close" ? Close
        : type === "Favorite" ? Favorite
          : type === "FavoriteBorder" ? FavoriteBorder
            : Search;

  return <Icon style={{ color, height, width }} />;
};
