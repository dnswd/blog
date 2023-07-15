export default function ChatContainer({ children }) {

    return (
      <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-0 relative w-full">
        <div className="w-full sm:w-96 content-end items-end flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center overflow-visible p-0 relative">
          {children}
        </div>
      </div>
    )
  
  }
  
  