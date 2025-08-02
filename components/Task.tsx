import type { TaskCardProps } from "../libs/types";
const Task = ({}: TaskCardProps) => (
    <><div className="card mb-3">
        <div className="card-body">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Read a book</h5>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text"> Vite + React + Bootstrap + TS </p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div><div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                        <h5 className="card-title">Write code</h5>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                        <p className="card-text">Finish project for class</p>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button className="btn btn-success me-2">Done</button>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div><div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                        <h5 className="card-title">Deploy app</h5>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                        <p className="card-text">Push project to GitHub Pages</p>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button className="btn btn-success me-2">Done</button>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div></>
);
export default Task;