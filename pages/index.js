import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Badge,
  Link,
  Text
} from 'theme-ui'
import styled from '@emotion/styled'
import Head from 'next/head'
import NextLink from 'next/link'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Icon from '../components/icon'
import BGImg from '../components/background-image'
import ForceTheme from '../components/force-theme'
import SlideDown from '../components/slide-down'
import FadeIn from '../components/fade-in'
import Photo from '../components/photo'
import Footer from '../components/footer'
import FooterImgFile from '../public/home/footer.png'
import GoldenTrainImgFile from '../public/home/golden-train.png'
import Slack from '../components/slack'
import Announcement from '../components/announcement'
// import { timeSince } from '../lib/dates'

let Highlight = styled(Text)`
  color: inherit;
  border-radius: 1em 0 1em 0;
  background: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`
Highlight = Highlight.withComponent('mark')

const Feature = ({ icon, color, name, desc, children, sx, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridGap: [0, 4],
      gridTemplateColumns: [null, 'auto 1fr'],
      alignItems: 'start',
      justifyContent: 'start',
      bg: 'rgba(224, 230, 237, 0.25)',
      p: [3, 4],
      mt: [1, 1],
      borderRadius: 'extra',
      span: { transform: 'none', width: 'min-intrinsic' },
      svg: { color: 'white' },
      ...sx
    }}
  >
    {children || (
      <Box
        as="span"
        sx={{
          width: 'fit-content',
          bg: color,
          borderRadius: 18,
          lineHeight: 0,
          p: 2,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon glyph={icon} size={48} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" mb={2} mt={0}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
)

const Stage = ({ icon, color, name, desc, children, ...props }) => (
  <Box {...props}>
    {children || (
      <Box
        as="span"
        sx={{
          width: 'fit-content',
          bg: color,
          borderRadius: 18,
          lineHeight: 0,
          p: 2,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon glyph={icon} size={48} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" mb={2}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
)

const Page = () => (
  <>
    <Meta
      as={Head}
      title="Don’t run your coding club alone"
      description="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
      image="https://cloud-epiki4yvg.vercel.app/2020-09-09_drbp62kayjuyyy0ek89mf9fwcp5t4kuz.jpeg"
    />
    <Head>
      <meta
        property="og:logo"
        content="https://assets.hackclub.com/icon-rounded.png"
        size="512x512"
      />
    </Head>
    <ForceTheme theme="light" />
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'dark',
        pt: [5, 6],
        pb: [2, 3],
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <BGImg
        src={GoldenTrainImgFile}
        width={2224}
        height={1249}
        alt="Hack Clubbers gather at the SpaceX HQ"
        priority
      />

      <Announcement
          copy="Let's Assemble in San Francisco"
          caption="Join us for the first IRL hackathon in SF since 2020."
          href="https://assemble.hackclub.com/"
          iconLeft="explore"
          color="primary"
      />
        <Text
            as="p"
            variant="lead"
            sx={{
              color: 'white',
              textShadow: 'text',
              maxWidth: 620,
              mt: 0,
              mx: 'auto',
              mb: [3, 4]
            }}
          >
            Hack Club is a community of technical teenagers all around the world...
          </Text>

      <SlideDown duration={768}>
        <Heading
          as="h1"
          variant="ultratitle"
          sx={{
            color: 'white',
            textShadow: 'text',
            filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.5))',
            WebkitFilter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.5))',
            maxWidth: [null, 'copyUltra'],
            my: [3, 4],
            mx: 'auto',
            zIndex: 1
          }}
        >
          <Text
            as="span"
            sx={{
              lineHeight: 1,
              display: 'block',
              pb: 3
            }}
          >
            Discovering the joy of code.
          </Text>
        </Heading>
        <Button
          as="a"
          variant="ctaLg"
          href="https://apply.hackclub.com"
          target="_blank"
          rel="noopener"
        >
          Join the Club
        </Button>
      </SlideDown>
     
      <Box
        sx={{
          display: 'flex',
          justifyContent: ['center', 'center', 'flex-end'],
          marginRight: 2,
          mt: [2, 2, 1]
        }}
      >
        <Badge
          as="a"
          href="https://zephyr.hackclub.com"
          variant="pill"
          sx={{
            zIndex: '1',
            bg: '#000',
            color: 'white',
            opacity: 0.5,
            textDecoration: 'none',
            fontWeight: 'normal',
            ':hover': { opacity: 1 },
            transition: '0.3s ease'
          }}
        >
          Hackers onboard The Hacker Zephyr
        </Badge>
      </Box>
    </Box>
    <Box as="section" sx={{ py: [4, 5], color: 'black' }}>
      <Container>
        <Text as="p" variant="eyebrow">
          The rundown
        </Text>
        <Box sx={{ display: "flex" }}>
          <Text as="p" variant="lead" sx={{ flex: 1 }}>
            People learn best by making things they care about and sharing 
            them with others. Hack Club is a non-profit which helps teens do this.
            We run an online community for technical teens, offer access to 
            financial services to run real life events like hackathons and coding clubs, 
            and involve teenagers in building open-source projects like
            a <Link href="https://github.com/hackclub/puzzlelab/">handheld console</Link>, 
            a <Link href="https://hackclub.com/bank/">bank</Link>, 
            a <Link href="https://github.com/hackclub/some-assembly-required">guide to assembly language</Link>, 
            and many <Link href="https://github.com/hackclub">more...</Link>
          </Text>
          <Box sx={{ flex: 1, overflow: "scroll", display: "flex", alignItems: "center" }}>
            <Image 
              sx={{ width: "200px", minWidth: "200px" }}
              src="https://cloud-gqfi5oybe-hack-club-bot.vercel.app/0screen_shot_2022-07-01_at_12.37.58_pm__2_.png"
              width="200px"/>
            <Image 
              sx={{ width: "200px", minWidth: "200px" }}
              src="data:image/png;base64,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"
              width="200px"/>
            <Image 
              sx={{ width: "200px", minWidth: "200px" }}
              src="data:image/png;base64,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"
              width="200px"/>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box
      as="section"
      sx={{
        py: 6,
        bg: 'dark',
        color: 'white',
        'h2,p': { textShadow: 'text' },
        textAlign: [null, 'center'],
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <BGImg
        gradient="linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.625))"
        src="https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpeg?v=1589633885855"
        width={2048}
        height={1170}
        alt="Hack Clubbers gather at the Elon Musk AMA in 2020"
      />
      <Container>
        <Text as="p" variant="eyebrow" sx={{ color: 'white', opacity: 0.75 }}>
          ~ Welcome to Hackerland ~
        </Text>
        <Heading as="h2" variant="title">
          By the students, for the students.
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: 'auto' }}>
          Learning to code is like gaining a superpower — turning you from a
          consumer of technology into a creator. It shouldn’t be taught like a
          class — it should be a creative, inclusive space. To foster this
          environment,{' '}
          <Highlight>every&nbsp;Hack&nbsp;Club is student-led</Highlight> &
          members make self-directed projects.
        </Text>
        <NextLink href="/philosophy" passHref>
          <Button
            as="a"
            variant="ctaLg"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)'
            }}
          >
            Our philosophy →
          </Button>
        </NextLink>
      </Container>
    </Box>
    <Footer
      dark
      sx={{
        backgroundColor: 'dark',
        position: 'relative',
        overflow: 'hidden',
        textShadow: '0 1px 2px rgba(0,0,0,0.375)',
        'h2,span,p,a': { color: 'white !important' },
        '> div img': { objectPosition: ['left', 'center'] },
        svg: {
          fill: 'white',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
        }
      }}
    >
      <BGImg
        width={2544}
        height={2048}
        gradient="linear-gradient(rgba(0,0,0,0.125), rgba(0,0,0,0.25))"
        src={FooterImgFile}
        placeholder="blur"
        alt="Globe with hundreds of Hack Clubs"
      />
      <style>
        {`a{
          color: #338eda
        }`}
      </style>
    </Footer>
  </>
)

export default Page
