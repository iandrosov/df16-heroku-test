/*
 * Copyright (c) 2021 Igor Androsov All rights reserved.
 * @author Igor Androsov
 * @version 1.0
 */

/**
 * This file defines configuration variables for application.
 */
'use strict';

module.exports = {

  /**
   * Secret Key - replace with real seed Key
   */
  secret: 'mytemporarysecretkey',

  /**
   * Amount of details logged to console depends on this setting.
   * Possible values are: silly, debug, verbose, info, warn, error
   */
  LOG_LEVEL: 'debug',

  /**
   * Port at which API server should be listening
   */
  PORT: process.env.PORT || 8080,

  /**
   * Postresql database connection string.
   */
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://rxsvucbfbmgfiw:180fa5453ccf3ef58140a894efa46ab660ad929484c58d158605c3a4c7cd9470@ec2-107-23-143-66.compute-1.amazonaws.com:5432/dfu3nb57chc8mc',
  // DF16tdx17 DATABASE_URL: process.env.DATABASE_URL || 'postgres://zfjhwolposglpi:eeO819Q6hNfvDLZBh6nfSoMdfH@ec2-54-83-47-145.compute-1.amazonaws.com:5432/deu9n2ng667tus?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
  /**
   * String returned in "status" field of successfull responses.
   */
  SUCCESS_RESULT_STRING: 'Success',

  /**
   * String returned in "status" field of failing responses.
   */
  FAILURE_RESULT_STRING: 'Failure',

  /**
   * It is date format. See http://momentjs.com/docs/#/displaying/ for supported formats.
   */
  DATE_FORMAT: 'YYYY-MM-DD',

  /**
   * It is timestamp format. See http://momentjs.com/docs/#/displaying/ for supported formats.
   */
  TIMESTAMP_FORMAT: 'YYYY-MM-DD HH:mm:ss',

  /**
   * String returned in "resultDetails" field of responses with invalid path.
   */
  HTTP_400_MESSAGE: '400 Bad Request',
  HTTP_401_MESSAGE: '401 Not Authorized',
  HTTP_404_MESSAGE: '404 Not Found',
  HTTP_403_MESSAGE: '403 Forbidden',

};
