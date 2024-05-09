import React from "react";
import "./Preview.css";

const Preview = () => {
  const [selectEl, setSelectEl] = React.useState<string | null>(null);

  const handleSelectElement = (id: string) => {
    setSelectEl(id);
  };

  return (
    <div className="templateDisplay">
      <div
        style={{
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            backgroundColor:
              selectEl === "template-header" ? "bisque" : "transparent",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => handleSelectElement("template-header")}
        >
          Mock Header
        </h1>

        <p
          style={{
            backgroundColor:
              selectEl === "template-paragraph" ? "bisque" : "transparent",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => handleSelectElement("template-paragraph")}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.
        </p>

        <p
          style={{
            backgroundColor:
              selectEl === "template-paragraph-2" ? "bisque" : "transparent",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => handleSelectElement("template-paragraph-2")}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.
        </p>
        {selectEl}
      </div>
    </div>
  );
};

export default Preview;
