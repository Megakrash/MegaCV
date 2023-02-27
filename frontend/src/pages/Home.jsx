import React from "react";
import Typist from "react-typist";

export default function Home() {
  const line1 = "{";
  const line2 = "properties: [";
  const line3 = " ],";
  const line4 = "};";

  const onDownloadPdf = () => {
    fetch(`${import.meta.env.VITE_PORT_BACKEND}/assets/cv.pdf`).then(
      (response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          const alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `CV Scattolini Jonathan`;
          alink.click();
        });
      }
    );
  };

  return (
    <div className="home">
      <div>
        <button type="button" onClick={onDownloadPdf}>
          Télécharger le CV
        </button>
      </div>
      <Typist
        className="home_textBox"
        avgTypingDelay={65}
        cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}
      >
        <p className="home_textBox_line1">
          const <span>helloTous</span> = {line1}{" "}
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line2">
          firstname: <span>'Jonathan'</span>,
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line3">
          lastname: <span>'Scattolini'</span>,
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line4">
          location: <span>'Nantes'</span>,
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line5">
          available: <span>'true'</span>,
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line6">{line2}</p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line7">
          <span>'ReactJs'</span>,
        </p>
        <Typist.Delay ms={250} />
        <p className="home_textBox_line8">
          <span>'Sass'</span>,
        </p>
        <Typist.Delay ms={250} />
        <p className="home_textBox_line9">
          <span>'Express'</span>,
        </p>
        <Typist.Delay ms={250} />
        <p className="home_textBox_line10">
          <span>'Node Js'</span>,
        </p>
        <Typist.Delay ms={250} />
        <p className="home_textBox_line11">
          <span>'JavaScript'</span>,
        </p>
        <Typist.Delay ms={250} />
        <p className="home_textBox_line12">
          <span>'and more...'</span>
          {line3}
        </p>
        <Typist.Delay ms={500} />
        <p className="home_textBox_line13">{line4}</p>
      </Typist>
    </div>
  );
}
