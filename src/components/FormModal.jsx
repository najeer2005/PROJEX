import "./FormModal.css";

function FormModal({ title, onClose, onSubmit, children, submitLabel, loading }) {
  return (
    <div className="form-modal-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="form-modal-header">
          <h2 id="form-modal-title">{title}</h2>
          <button className="form-modal-close" type="button" onClick={onClose} aria-label="Close form">
            &times;
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-modal-body">{children}</div>
          <div className="form-modal-actions">
            <button className="form-modal-cancel" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="form-modal-submit" type="submit" disabled={loading}>
              {loading ? "Saving..." : submitLabel}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default FormModal;
