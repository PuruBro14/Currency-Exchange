const ORDER_STATUS = {
  PENDING: 0,
  PROCESSING: 1,
  SHIPPED: 2,
  DELIVERED: 3,
  DELIVERY_FAILED: 4,
  RETURNED: 5,
  RETURNED_FAILED: 6,
};

const ROLES = {
  ADMIN: 1,
  SUPER_ADMIN: 2,
};

function getRoleNames(ROLES) {
  if (ROLES === 1) {
    return "admin";
  } else if (ROLES === 2) {
    return "super_admin";
  } else {
    return "user";
  }
}

module.exports = { ORDER_STATUS, ROLES, getRoleNames };
