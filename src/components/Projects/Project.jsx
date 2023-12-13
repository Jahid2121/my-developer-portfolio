import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Btn from "../Btn";

const Project = ({ project }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card card-compact mt-12 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-80 cursor-pointer"
          src={project.img}
          alt={project.projectName}
        //   onClick={openModal}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.projectName}</h2>
        <p>{project.details}</p>
        <div className="card-actions justify-end">
          <Link to={project.githubLink} className="">
            <Btn text={'View in GitHub'} />
          </Link>
        </div>
      </div>
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={project.projectName}
      >
        <img src={project.img} alt={project.projectName} />
        <button className=" absolute z-30  top-5 right-0" onClick={closeModal}><Btn text={"Close"}></Btn></button>
      </Modal> */}
    </div>
  );
};

export default Project;
