// import NavBar from "@/components/NavBar";
import BubbleRail from "@/components/BubbleRail"
import ChatContainer from "@/components/ChatContainer"

function A({ href, children }) {
  return (
    <a href={href} target="_blank" className="font-bold underline">
      {children}
    </a>
  )
}

export default function Home() {

  // const data1 = [
  //   [
  //     ['Hey, I\'m Dennis! A freshly graduated software engineer based in Jakarta 👋', 'HI'],
  //   ],
  //   ['I\'m a tech polymath experienced in building and deploying scalable apps.',
  //       (<>
  //         Check out some of my projects on <A href="https://www.github.com/dnswd">GitHub</A>.
  //       </>)],
  //     [(
  //       <>
  //         Currently looking for a job, so if you're looking for a full-stack engineer, backend engineer, MLOps engineer, or a cloud engineer you can check my hit me up on <A href="https://www.linkedin.com/in/dnswd/">LinkedIn</A>, or download my resume <A href="/Resume_Dennis_A_Walangadi.pdf">here</A>.
  //       </>
  //     )],
  //     ['Hi']
  // ]

  const data = [
    [
      [
        'Hey, I\'m Dennis! Software engineer at OY! Indonesia, based in Jakarta 👋'
      ],
      [
        'I\'m a tech polymath experienced in building, deploying, and optimizing scalable apps.'
      ]
    ],
    [
      [
        (<>
          Currently on the hunt for a job, so if you happen to be in need of a full-stack engineer, backend engineer, MLOps engineer, or a cloud engineer, feel free to hit me up on <A href="https://www.linkedin.com/in/dnswd/">
            LinkedIn</A>.
        </>),
        (<>
          You can check my full résumé <A href="/Resume_Dennis_A_Walangadi.pdf">here</A>, or we can &apos;ngopi&apos; together if you&apos;re in Jakarta!
        </>)
      ]
    ],
    [
      [
        'I\'ve been a teaching assistant for a year at the Faculty of Computer Science, University of Indonesia and awarded a scholarship by SEA-based VCs.'
      ],
      [
        'I enjoy building side projects for fun and occasionally submit them as college assignments.'
      ]
    ],
    // TODO: Experience, project, writings
    // [
    //   [
    //     'I\'m currently a software engineer at OY! Indonesia'
    //   ]
    // ]
  ]
  // const data = 

  // const data1 = [

  // ]

  // const data = [[['Hello World', 'I am'], ['A']], [['B']]]

  return (
    <div className="relative">
      { /* <NavBar /> */}
      { /*
        TODO:
        - [x] Basic chat design
        - [x] Bubble design
        - [-] Text is growing, static text?
        - [x] Copywriting abstraction
        - [x] Top and bottom gradient -- v0.1 release
        - [ ] Bubble tail
        - [ ] User input
        - [ ] Button
        - [ ] Drawer (pretermined input) -- v0.2 release
        - [ ] User input functionality
        - [ ] Dynamic chat bubble
        - [ ] Intent detection (full-text search?)
      */ }
      <main className="h-screen">
        <div className="flex w-auto min-h-full content-center items-center flex-nowrap flex-col gap-0 h-min p-0 relative overflow-hidden bg-pitch">
          <header className="relative w-full sm:w-96 pt-32 px-4 sm:px-0 content-start items-start flex flex-none flex-col flex-nowrap gap-7 h-min justify-start overflow-visible z-10">
            { /* Chat container */}
            {data.map((rails, index) => (
              <ChatContainer key={'rails-' + index} >
                <BubbleRail data={rails} />
              </ChatContainer>
            ))}
          </header>
          <div className="flex-none h-[20vh] overflow-hidden relative w-full" />
          <div className="grain z-100" />
        </div>
      </main>
    </div>
  );
}
