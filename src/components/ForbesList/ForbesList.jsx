import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({dataForbes}) => {
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
  {dataForbes.map(({id, name, capital, avatar, isIncrease}) => (<ForbesListItem key={id} name={name} capital={capital} avatar={avatar} isIncrease={isIncrease}/>))}
    {/* Довільна кіл-сть FriendListItem */}
  </LeaderBoardProfiles>
</LeaderBoard>
};
