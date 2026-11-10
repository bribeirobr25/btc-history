import {completeEntry,CompleteVisual} from './CompleteVisual';
import {documentaryEntry,DocumentaryVisual} from './DocumentaryVisual';
import {hasPilot,PilotVisual} from './PilotVisual';

/** Every timeline record has one reviewed local raster image. */
export function TimelineObject({index}:{index:number}){
 if(completeEntry(index))return <CompleteVisual index={index}/>;
 if(documentaryEntry(index))return <DocumentaryVisual index={index}/>;
 if(hasPilot(index))return <PilotVisual index={index}/>;
 throw new Error(`Missing reviewed timeline image: ${index}`);
}
