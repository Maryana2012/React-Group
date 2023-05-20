// import { TitleTop } from 'components/ForbesList/ForbesList.styled';
import FormatDate from 'helper/formatDate';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = (props) => {
  const {poster, tag, title, description, name, avatar, postedAt } = props;
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={tag}
    />
  </CardHeader>
  <CardBody>
      <Tag>{ tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={name} />
      <UserInfo>
          <UserName>{ name}</UserName>
          <Date>{FormatDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>


};
