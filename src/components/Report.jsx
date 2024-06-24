import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Report.css'; // Import the custom CSS file


const IndividualReport = () => {
  const [formData, setFormData] = React.useState({
    designation: '',
    department: '',
    name: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.designation || !formData.department || !formData.startDate || !formData.endDate || !formData.name) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Generating Individual report with data:', formData);
    toast.success('Individual report generated successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="card mb-4 custom-card">
      <div className="card-header">
        Individual Report
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Designation</label>
            <select className="form-control form-control-sm" name="designation" value={formData.designation} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Faculty">Faculty</option>
              <option value="Hod">Hod</option>
              <option value="Dean">Dean</option>
            </select>
          </div>
          <div className="form-group">
            <label>Department</label>
            <select className="form-control form-control-sm" name="department" value={formData.department} onChange={handleChange}>
              <option value="">Select</option>
              <option value="CSE">CSE</option>
              <option value="AIML">AIML</option>
              <option value="CYS">CYS</option>
              <option value="AIDS">AIDS</option>
              <option value="IT">IT</option>
              <option value="Mech">Mech</option>
              <option value="Civil">Civil</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name</label>
            <select className="form-control form-control-sm" name="name" value={formData.name} onChange={handleChange}>
              <option value="">Select</option>
              <option value="John">John</option>
              <option value="Vignesh">Vignesh</option>
              <option value="Priya">Priya</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" className="form-control form-control-sm" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" className="form-control form-control-sm" name="endDate" value={formData.endDate} onChange={handleChange} />
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Generate Individual Report</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BulkReport = () => {
  const [formData, setFormData] = React.useState({
    designation: '',
    department: '',
    name: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.designation || !formData.department || !formData.startDate || !formData.endDate || !formData.name) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Generating Bulk report with data:', formData);
    toast.success('Bulk report generated successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="card custom-card">
      <div className="card-header">
        Bulk Report
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Designation</label>
            <select className="form-control form-control-sm" name="designation" value={formData.designation} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Faculty">Faculty</option>
              <option value="Hod">Hod</option>
              <option value="Dean">Dean</option>
            </select>
          </div>
          <div className="form-group">
            <label>Department</label>
            <select className="form-control form-control-sm" name="department" value={formData.department} onChange={handleChange}>
              <option value="">Select</option>
              <option value="CSE">CSE</option>
              <option value="AIML">AIML</option>
              <option value="CYS">CYS</option>
              <option value="AIDS">AIDS</option>
              <option value="IT">IT</option>
              <option value="Mech">Mech</option>
              <option value="Civil">Civil</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name</label>
            <select className="form-control form-control-sm" name="name" value={formData.name} onChange={handleChange}>
              <option value="">Select</option>
              <option value="John">John</option>
              <option value="Vignesh">Vignesh</option>
              <option value="Priya">Priya</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" className="form-control form-control-sm" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" className="form-control form-control-sm" name="endDate" value={formData.endDate} onChange={handleChange} />
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Generate Bulk Report</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Report = () => {
  return (
    <div className="d-flex">
      
      <div className="container mt-5 ml-5" style={{ marginLeft: '260px' }}>
        <ToastContainer />
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-weight-bold">REPORT</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <IndividualReport />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <BulkReport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
