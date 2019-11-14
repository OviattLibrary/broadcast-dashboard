<?php
// $Id$
/**
 * @file
 * Broadcast Dashboard drush include file
 *
 * This file contains calls required to run a drush call for the module from CLI.
 */

/**
 * Implementation of hook_drush_command().
 */

function broadcast_dashboard_drush_command() {
  $items = array();
  // Name of command
  $items['bd-cron'] = array(
    'description' => 'Run cron for Broadcast Dashboard',
    'callback' => 'broadcast_dashboard_cron',
  );
  return $items;
}
?>
