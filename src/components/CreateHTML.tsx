import { css, Global } from "@emotion/react";

export default function CreateHTML() {
  return (
    <>
      <Global
        styles={css`
          .container {
            padding: 1rem;
            width: 500px;
            height: 300px;
            overflow: hidden;
            user-select: none;
          }

          .galeria {
            margin-inline: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }

          img,
          .galeria-img {
            display: block;
            max-width: 100%;
            height: 100%;
            width: 130px;
            border-radius: 0.5rem;
            aspect-ratio: 1;
          }

          .imgContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}
      />
      <main className="container">
        <div className="galeria"></div>
      </main>
    </>
  );
}
