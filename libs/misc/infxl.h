#include "inttypes.h"

void copy_inp_vec_to_ram8_head(int8_t *ram8);

int8_t read_op_vec_frm_ram8_tail(int8_t *ram8);

void deep_net_inference(       int8_t *ram8);

int8_t run_infxl_model();

int8_t insert_infxl_measurement(int8_t pos, int8_t ax, int8_t ay, int8_t az);

int8_t* get_infxl_measurement();
