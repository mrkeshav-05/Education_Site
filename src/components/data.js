import { category_1, category_2, category_3, category_4, stockmarket, math } from "../assets/images";
import { course_1, maths, stocks, pharma } from "../assets/images";
const cardData = [
  {
    id: 1,
    title: "Software Engineer Programs",
    img: category_1,
    color: "green",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "App Development Programs",
    img: category_2,
    color: "red",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 3,
    title: "UI/UX Design",
    img: category_3,
    color: "blue",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 4,
    title: "Pharma Course",
    img: category_4,
    color: "yellow",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 5,
    title: "Stock Market Programs",
    img: stockmarket,
    color: "purple",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 6,
    title: "Mathematics Course   /Programs",
    img: math,
    color: "pink",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];


const course = [
  {
    id: 1,
    title: "Build a Modern Website Using HTML, CSS, and JavaScript",
    rating: 4.5,
    price: 40.00,
    img: course_1,
    level: "Advanced",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `- Learn advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId: 'https://www.youtube.com/watch?v=VotJ1mcuhMk',
  },
  {
    id: 2,
    title: "Get the Certificate in B-Pharma and D-Pharma",
    rating: 4.5,
    price: 40.00,
    img: pharma,
    level: "Intermediate",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `- Learn advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId: 'https://www.youtube.com/watch?v=gNcMYHQ3dCs',

  },
  {
    id: 3,
    title: "Learn how make money in Stock Market in just 7days",
    rating: 4.9,
    price: 50.00,
    img: stocks,
    level: "Advanced",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `- Learn advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId: 'https://www.youtube.com/watch?v=rL4DdTOHc0A',

  },
  {
    id: 4,
    title: "Learn class 10th maths in just one minute",
    rating: 4.5,
    price: 20.00,
    img: maths,
    level: "Beginner",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `-  advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId: 'https://www.youtube.com/watch?v=l-nMKJ5J3Uc',

  }
]




export {
  cardData,
  course,
};