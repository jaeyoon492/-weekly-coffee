import React from "react";

const Complete = () => {
  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={() => {}}
    >
      <div className="modal-dialog">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">입점신청 완료!</h3>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {}}
            ></button>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button
              onClick={() => {}}
              type="button"
              className="btn btn-secondary"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
