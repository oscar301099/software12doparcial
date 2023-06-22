import {logout} from "@/modules/auth/services/auth";
import Link from "next/link";
import TableNode from "@/modules/diagrams/components/TableNode";
import ReactFlow, {
    addEdge, Background, BackgroundVariant, ControlButton,
    Controls, EdgeTypes,
    MiniMap,
    Panel,
    useEdgesState,
    useNodesState,
    useReactFlow
} from "reactflow";
import React, {useCallback, useEffect, useState} from "react";
import {saveAsImage} from "@/modules/diagrams/utils/image-export";
import CustomEdgeStartEnd from "@/modules/diagrams/components/CustomEdgeStartEnd";
import SideBar from "@/modules/diagrams/components/SideBar";
import {NodeType} from "@/modules/diagrams/enums/NodeType";
import {EdgeType} from "@/modules/diagrams/enums/EdgeType";
import Markers from "@/modules/diagrams/components/Markers";
import {Cardinality} from "@/modules/diagrams/enums/Cardinality";
import {useRouter} from "next/router";
import {onSnapshot} from "@firebase/firestore";
import {collection, doc} from "firebase/firestore";
import {auth, firestore} from "@/common/config/FirebaseConfig";
import {
    addMember,
    addNewEdge,
    addTable, removeMember,
    updateDiagram,
    updateEdge,
    updateTable
} from "@/modules/auth/services/firestore";
import Loading from "@/modules/auth/components/Loading";
import Modal from "@/common/components/elements/Modal";
import {DataType} from "@/modules/diagrams/enums/DataType";
import Trash from "@/assets/svg/trash.svg";

function NavBar(props: any) {
    return <div className={'h-16 bg-red-500 border-b-2 border-white w-full flex justify-between items-center px-3'}>
    <Link href={'/app'}>
        <h1 className={'text-xl text-white font-bold'}>{'Diagrama'}</h1>
    </Link>
    <div>
        <button className={'sign-out'} onClick={(e)=>logout()}>Desconectarse</button>
        <button className="guardarFoto" onClick={() => saveAsImage()} style={{ color: "white" }}>Guardar Foto</button>
        {
        props.children
        }
    </div>
</div>

}

export default NavBar
