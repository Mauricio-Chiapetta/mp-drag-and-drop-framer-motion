import songs from "./data/songs.json";
import { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
function App() {
  const controls = useDragControls();
  const [items, setItems] = useState(songs);
  return (
    <div className="flex items-center justify-center min-h-screen text-slate-800 bg-zinc-950">
      <div className="w-full max-w-lg px-4 py-10 my-10 bg-white rounded-lg shadow-2xl">
        <div className="h-56 -mx-4 -mt-10 bg-[url('/background-header.jpg')] bg-cover  flex items-end mb-8">
          <h1 className="w-full p-6 text-3xl font-bold text-left text-white bg-black bg-opacity-50">
            Playlist - Soft Pop Hits
          </h1>
        </div>
        <div className="">
          
            <Reorder.Group axis="y" values={items} onReorder={setItems} as="div">
              {items.map((song) => (
                
                  <Reorder.Item className="flex items-center w-full gap-6 p-4 mx-auto mb-4 card"
                  key={song.id} value={song} dragControls={controls} as="div" >
                    <span className="text-slate-400 border-slate-200 cursor-grab">
                   
                      <img
                        src="/grab-icon.svg"
                        alt="grab icon"
                        className="w-8 h-8 pointer-events-none"
                        onPointerDown={(e) => controls.start(e)}
                      />
                    </span>
                    <img
                      src={song.image}
                      alt=""
                      className="w-14 hue-rotate-30"
                    />
                    <div className="w-full card-header">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold ">{song.title}</h3>
                        <p className="text-sm text-slate-600">
                          {song.duration}
                        </p>
                      </div>
                      <p className="text-sm text-slate-400">{song.artist}</p>
                    </div>
                  
                  
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      </div>
    
  );
}

export default App;
