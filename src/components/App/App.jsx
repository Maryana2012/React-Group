import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import data from '../../data/article.json'
import dataStat from '../../data/data.json'
import dataForbes from '../../data/forbes.json'
import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard poster={data.poster}
          tag={data.tag}
          title={data.title}
          description={data.description}
          name={data.name}
          avatar={data.avatar}
          postedAt={data.postedAt}
         />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={dataStat} />
        {/* <Statistics stats={dataStat} /> */}

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList dataForbes={dataForbes}/>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={transactions}/>
      </Container>
    </Section>
  );
};
