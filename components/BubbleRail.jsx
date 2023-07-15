export default function BubbleRail({ data = [['Hello World']] }) {
    return (
      <>
        <div className="relative aspect-square rounded-full flex-none overflow-visible w-6 z-10">
          <img src="https://i.scdn.co/image/ab6775700000ee85d8f9f69369f6a4794862a287" alt="avatar" className="absolute aspect-square rounded-full top-0 right-0 bottom-0 left-0 object-center object-cover" />
        </div>
        <div className="content-start items-start flex grow shrink-0 basis-0 flex-col flex-nowrap gap-2 h-min justify-center overflow-hiddden p-0 relative w-px text-neutral-50 text-base">
  
          {data.map((series, index) => {
            return (
              <div key={'rail-' + index} className="w-full sm:w-80 content-start items-start rounded-2xl flex flex-none flex-col flex-nowrap gap-0 h-min justify-start overflow-hidden py-2 px-4 relative border border-softline bg-bubble">
                <div className="flex flex-col justify-start shrink-0 transform-none h-auto flex-none max-w- relative whitespace-pre-wrap w-auto break-words gap-3">
                  
                  {series.map((text, inner_index) => {
                    return (
                      <p key={'paragraph-' + inner_index} className="text-left">
                        {text}
                      </p>
                    )
                  })}
  
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  