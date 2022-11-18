import React, { useEffect } from "react";
import mirador from "mirador";
import annotationPlugins from "mirador-annotations/es/index";
import LocalStorageAdapter from "mirador-annotations/es/LocalStorageAdapter";

export default function Mirador(props) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const canvas = urlParams.get("canvas");
  const annotationid = urlParams.get('annotationid');
  const config = {
    id: "mirador",
    annotation: {
      adapter: (canvasId) =>
        new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
      exportLocalStorageAnnotations: false, // display annotation JSON export button,
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
    thumbnailNavigation: {
      defaultPosition: "far-right",
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
        canvasId: canvas,
      },
    ],
  };

  const plugins = [...annotationPlugins];

  useEffect(() => {
    mirador.viewer(config);
    if (annotationid){
      setTimeout(() => {
        document.querySelector(`[annotationid="${annotationid}"]`).click();
      }, "2000");
    }
  });

  return <div id="mirador" />;
}
