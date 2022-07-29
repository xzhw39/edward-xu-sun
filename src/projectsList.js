const projects = [
  {
    id: 1,
    title: 'SEO Optimization',
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="9" cy="7" r="3" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11 13H7C4.79086 13 3 14.7909 3 17C3 18.6569 4.34315 20 6 20H12C13.6569 20 15 18.6569 15 17C15 14.7909 13.2091 13 11 13Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 8L18 11L16.5 9.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-mercury',
    deployed: 'https://xzhw39.github.io/edward-xu-mercury',
  },
  {
    id:2,
    title: 'Tech Blog' ,
    img: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Micro.blog</title><path d="M12 0C5.4 0 0 4.9 0 10.95 0 17 5.4 21.9 12 21.9c1.4 0 2.85-.25 4.2-.7.15-.05.35 0 .45.1 1 1.35 2.55 2.3 4.25 2.7l.25-.1v-.3a4.65 4.65 0 01.2-5.9C22.9 15.85 24 13.5 24 10.95 24 4.9 18.55 0 12 0zm-.05 5.2c.15 0 .3.1.35.25L13.55 9l3.85.1c.15 0 .3.1.35.2.05.15 0 .3-.15.4L14.55 12l1.1 3.6c.05.15 0 .3-.15.4h-.4l-3.15-2.15L8.8 16h-.4c-.15-.1-.2-.25-.15-.4l1.1-3.6L6.3 9.7c-.15-.1-.2-.25-.15-.4.05-.1.2-.2.35-.2l3.85-.1 1.25-3.55c.05-.15.2-.25.35-.25z"/></svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-ceres',
    deployed: 'https://gentle-cove-92630.herokuapp.com/',
  },
  {
    id:3,
    title: 'Password Generator',
    img: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-123" viewBox="0 0 16 16"> <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z"/> </svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-earth',
    deployed: 'https://xzhw39.github.io/edward-xu-earth/',
  },
  {
    id:4,
    title: 'Code Quiz',
    img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z"/><path d="M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14.01,15 c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04C15.04,14.53,14.6,15,14.01,15z M16.51,8.83 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52c0-0.41-0.06-1.08,0.26-1.65c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26 C16.87,6.87,17.08,7.99,16.51,8.83z"/></svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-mars',
    deployed: 'https://xzhw39.github.io/edward-xu-mars/',
  },
  {
    id:5,
    title: 'Work Day Scheduler',
    img: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"/></svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-jupiter',
    deployed: 'https://xzhw39.github.io/edward-xu-jupiter/',
  },
  {
    id:6,
    title: 'Note Taker',
    img: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" /> <line x1="13" y1="8" x2="15" y2="8" /> <line x1="13" y1="12" x2="15" y2="12" /> </svg>,
    gitHub: 'https://github.com/xzhw39/edward-xu-neptune',
    deployed: 'https://salty-ridge-35295.herokuapp.com/',
  },
];

export default projects;
