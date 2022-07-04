import React, { useEffect } from "react";
import mirador from "mirador";
import annotationPlugins from "mirador-annotations/es/index";
import LocalStorageAdapter from "mirador-annotations/es/LocalStorageAdapter";
import AnnototAdapter from "mirador-annotations/es/AnnototAdapter";

export default function Mirador(props) {
  const config = {
    id: "mirador",
    annotation: {
      adapter: (canvasId) =>
        new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
      // adapter: (canvasId) => new AnnototAdapter(canvasId, "localhost:3000"),
      exportLocalStorageAnnotations: true, // display annotation JSON export button,
    },
    window: {
      defaultSideBarPanel: "annotations",
      sideBarOpenByDefault: true,
      highlightAllAnnotations: true,
      forceDrawAnnotations: true,
    },
    catalog: [
      // {
      //   manifestId:
      //     "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/dc/manifest.json",
      // },
    ],
    windows: [
      {
        loadedManifest: `${props.loadedManifest}`,
      },
    ],
  };

  const plugins = [...annotationPlugins];

  useEffect(() => {
    mirador.viewer(config, plugins);
  });

  return <div id="mirador" />;
}
