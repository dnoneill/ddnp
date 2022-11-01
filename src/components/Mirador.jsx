import React, { useEffect } from "react";
import mirador from "mirador";
import annotationPlugins from "mirador-annotations/es/index";
import LocalStorageAdapter from "mirador-annotations/es/LocalStorageAdapter";

export default function Mirador(props) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const canvas = urlParams.get('canvas');
  const config = {
    id: "mirador",
    annotation: {
      adapter: (canvasId) =>
        new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
      exportLocalStorageAnnotations: true, // display annotation JSON export button,
    },
    annotations: {
      htmlSanitizationRuleSet: "mirador2",
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
        canvasId: canvas
      },
    ],
  };

  const plugins = [...annotationPlugins];

  useEffect(() => {
    mirador.viewer(config, plugins);
  });
  
  return <div id="mirador" />;
}
