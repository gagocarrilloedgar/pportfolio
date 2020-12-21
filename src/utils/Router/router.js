const baseURL = process.env.REACT_APP_BASE_URL;

const challengeBase = baseURL + "/challenges/";
const eventBase = baseURL + "/events/";

const routerMain = {
  projectRouter: {
    addProject: baseURL + "/projects/add",
    uptadeProject: baseURL + "/projects/update/",
    getProjectsByTag: baseURL + "/projects/getBytags",
    getByUserchallengeId: baseURL + "/projects/getByUserchallengeId/",
    getBychallengeId: baseURL + "/projects/getBychallengeId",
    getByCompanyId: baseURL + "/projects/getByCompanyId",
    getByCompanyChallengeId: baseURL + "/projects/getBychallengeId/",
    getByCompanyEventId: baseURL + "/projects/getByCompanyEventId/",
    findProjects: baseURL + "/projects/findAll",
    findProject: baseURL + "/projects/",
    findProjectByUserId: baseURL + "/projects/findBy/",
    deleteProject: baseURL + "/projects/delete/",

  },

  studiesRouter: {
    addStudy: baseURL + "/studies/add",
    uptadeStudy: baseURL + "/studies/update/",
    findStudy: baseURL + "/studies/",
    findStudyByUserId: baseURL + "/studies/findBy/",
    deleteStudy: baseURL + "/studies/delete/",
  },

  userRouter: {
    signup: baseURL + "/users/add",
    login: baseURL + "/users/login",
    updateUser: baseURL + "/users/update/",
    findUsers: baseURL + "/users/findAll",
    findUser: baseURL + "/user/",
    logout: baseURL + "/users/logout",
    findByURL: baseURL + "/users/public/",
    googleLogin: baseURL + "/users/google/login",
    getAllUsersByIds: baseURL + "/users/findAllById",
    updateURL: baseURL + "/users/updatePersonalURL/",
    updateSkills: baseURL + "/users/updateSkills",
    updatehardlevel: baseURL + "/users/updatehardlevel",
    updatesoftlevel: baseURL + "/users/updatesoftlevel",
    updatePassword: baseURL + "/users/updatePassword"
  },

  companyRouter: {
    signup: baseURL + "/companies/add",
    login: baseURL + "/companies/login",
    googleLogin: baseURL + "/companies/google/login",
    update: baseURL + "/companies/update/",
    getCompaniesByIds: baseURL + "/companies/findAllById",
    updateCompanyURL: baseURL + "/companies/updateurl/",
    updatePassword: baseURL + "/companies/updatePassword",
    resetPassword: baseURL + "/companies/resetPassword",
    findAll: baseURL + "/companies/findAll",
    logout: baseURL + "/companies/logout",
    findById: baseURL + "/companies/",
    findByURL: baseURL + "/companies/public/",
    delete: baseURL + "/companies/delete/"
  },

  resourcesRouter: {
    addResource: baseURL + "/resources/add",
    uptadeResource: baseURL + "/resources/update/",
    getResourcesByTag: baseURL + "/resources/getBytags",
    findAll: baseURL + "/resources/findAll",
    findResource: baseURL + "/resources/",
    getResourceByGroup: baseURL + "/resources/findByGroup/",
    getResourceByPPType: baseURL + "/resources/findByPPType/",
    getResourceByLang: baseURL + "/resources/findByLang/",
    deleteResource: baseURL + "/resources/delete/",
  },

  mailerRouter: {
    welcome: baseURL + "/mailer/welcome",
  },


  challengeRouter: {
    add: challengeBase + "add",
    update: challengeBase + "update/",
    findById: challengeBase,
    findAll: challengeBase + "findAll",
    delete: challengeBase + "delete("
  },

  eventRouter: {
    add: eventBase + "add",
    update: eventBase + "update/",
    findById: eventBase,
    findAll: eventBase + "findAll",
    delete: eventBase + "delete("
  }

};

export default routerMain;
